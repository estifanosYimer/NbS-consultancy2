@echo off
REM NbS+C website: preview it on this computer. Double-click to run.
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Installing the current LTS version with winget...
  winget install -e --id OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
  if errorlevel 1 (
    echo Could not install automatically. Please install Node.js LTS from https://nodejs.org and run this file again.
    pause & exit /b 1
  )
  echo Node.js installed. Please close this window and double-click run_local.bat again.
  pause & exit /b 0
)
node -e "const [a,b]=process.versions.node.split('.').map(Number);process.exit(a>22||(a===22&&b>=23)?0:1)"
if errorlevel 1 (
  echo Your Node.js is too old for this site. Updating to the current LTS with winget...
  winget upgrade -e --id OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
  echo Please close this window and double-click run_local.bat again.
  pause & exit /b 0
)
if not exist node_modules (
  echo Installing packages, this takes a minute the first time...
  call npm install
  if errorlevel 1 ( echo Package installation failed. & pause & exit /b 1 )
)
echo.
echo Opening the site at http://localhost:4321  (close this window to stop)
call npm run dev -- --open
pause
