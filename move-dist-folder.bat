@echo off

REM Replace 'bootstrap' with your package name and 'your-desired-folder' with your target path
set "source_dir=node_modules\bootstrap\dist"
set "target_dir=html\lib\bootstrap"

IF EXIST "%target_dir%" (
  ECHO Target directory already exists. Skipping copy.
) ELSE (
  MKDIR "%target_dir%"
  ECHO Created target directory.
)

XCOPY /E /Y "%source_dir%" "%target_dir%"

ECHO Bootstrap dist folder copied successfully!
