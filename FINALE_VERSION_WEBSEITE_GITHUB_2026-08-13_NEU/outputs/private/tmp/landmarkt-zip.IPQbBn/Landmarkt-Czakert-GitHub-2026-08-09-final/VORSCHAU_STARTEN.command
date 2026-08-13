#!/bin/zsh

PROJECT_DIR="${0:A:h}"
PORT=3006
URL="http://localhost:${PORT}/#start"

cd "$PROJECT_DIR" || exit 1

if [[ ! -f "$PROJECT_DIR/out/index.html" ]]; then
  echo "Fehler: Die fertige Webseite wurde nicht gefunden."
  read "?Zum Schließen Eingabetaste drücken ..."
  exit 1
fi

if [[ -x /opt/anaconda3/bin/python3 ]]; then
  PYTHON=/opt/anaconda3/bin/python3
elif command -v python3 >/dev/null 2>&1; then
  PYTHON="$(command -v python3)"
else
  echo "Fehler: Python 3 wurde auf diesem Mac nicht gefunden."
  read "?Zum Schließen Eingabetaste drücken ..."
  exit 1
fi

OLD_PIDS=$(/usr/sbin/lsof -tiTCP:$PORT -sTCP:LISTEN 2>/dev/null || true)
if [[ -n "$OLD_PIDS" ]]; then
  echo "$OLD_PIDS" | while read -r pid; do
    kill "$pid" 2>/dev/null || true
  done
  sleep 1
fi

echo "Die Vorschau wird gestartet: $URL"
echo "Dieses Terminalfenster bitte geöffnet lassen."

"$PYTHON" -m http.server "$PORT" --bind 127.0.0.1 --directory "$PROJECT_DIR/out" &
SERVER_PID=$!

trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM

for attempt in {1..30}; do
  if /usr/bin/curl --silent --fail "http://127.0.0.1:$PORT/" >/dev/null 2>&1; then
    /usr/bin/open "$URL"
    wait "$SERVER_PID"
    exit $?
  fi
  sleep 0.25
done

echo "Die Vorschau konnte nicht gestartet werden."
read "?Zum Schließen Eingabetaste drücken ..."
exit 1
