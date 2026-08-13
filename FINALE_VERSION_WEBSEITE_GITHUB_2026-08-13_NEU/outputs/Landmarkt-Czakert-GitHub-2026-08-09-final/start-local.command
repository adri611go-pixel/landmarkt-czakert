#!/bin/zsh

set -e

PROJECT_DIR="${0:A:h}"
STATIC_DIR="$PROJECT_DIR/out"
PORT=3006

if [[ -x /opt/anaconda3/bin/python3 ]]; then
  PYTHON=/opt/anaconda3/bin/python3
else
  PYTHON=/usr/bin/python3
fi

cd "$PROJECT_DIR"

if [[ ! -f "$STATIC_DIR/index.html" ]]; then
  echo "Die fertige Vorschau fehlt. Bitte öffnen Sie das Projekt erneut in Codex."
  read "?Zum Schließen die Eingabetaste drücken ..."
  exit 1
fi

# Einen alten Next.js-Testserver auf dem ausschließlich für diese Vorschau
# verwendeten Port beenden, damit nicht erneut dessen Fehlerseite erscheint.
OLD_PIDS=$(/usr/sbin/lsof -tiTCP:$PORT -sTCP:LISTEN 2>/dev/null || true)
if [[ -n "$OLD_PIDS" ]]; then
  echo "$OLD_PIDS" | while read -r pid; do
    kill "$pid" 2>/dev/null || true
  done
  sleep 1
fi

echo "Landmarkt Czakert wird unter http://localhost:$PORT gestartet ..."
echo "Dieses Fenster bitte geöffnet lassen."

"$PYTHON" -m http.server "$PORT" --bind 127.0.0.1 --directory "$STATIC_DIR" &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

for attempt in {1..20}; do
  if /usr/bin/curl --silent --fail "http://127.0.0.1:$PORT/" >/dev/null 2>&1; then
    /usr/bin/open "http://localhost:$PORT/#start"
    wait "$SERVER_PID"
    exit $?
  fi
  sleep 1
done

echo "Die Vorschau konnte nicht gestartet werden."
wait "$SERVER_PID"
