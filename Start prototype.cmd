@echo off
cd /d "%~dp0"
set "prototype_node=node"
where node >nul 2>nul
if errorlevel 1 set "prototype_node=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
echo Starting Next Chapter. Keep this window open.
echo Open http://127.0.0.1:5173 in your browser.
"%prototype_node%" node_modules\vite\bin\vite.js --host 127.0.0.1 --port 5173 --strictPort
pause
