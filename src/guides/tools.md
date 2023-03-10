# Иструменты

## WSL
**Linux** - одна из наиболее востребованных ОС для разработки программного обеспечения и управления серверами в современном мире. Это свободная и открытая операционная система, которая позволяет пользователям настраивать ее под свои потребности. Одним из главных преимуществ Linux является его надежность и безопасность.

Наиболее удобный способ использовать Windows и Linux одноврменно существует Windows Subsystem for Linux (WSL). **WSL** - это функция в Windows 10 и более поздних версиях операционной системы, которая позволяет запускать приложения и команды Linux непосредственно на Windows.

### Установка WSL

::: warning
Все действия рекомендуется выполнять от имени администратора в PowerShell
:::

**1. Активация WSL**

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

**2. Активация "Платформы виртуальных машин"**

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

**3. Обновления ядра**

Загружаем [пакет обновления ядра Linux](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi), устанавливаем его, разрешаем использование повышенных разрешений для новой системы.

**4. Установка WSL 2 версией по умолчанию**

```powershell
wsl --set-default-version 2
```

**5. Установка дистрибутива**

Из магазина [Microsoft](https://apps.microsoft.com/store/detail/ubuntu/9PDXGNCFSCZV?hl=en-gb&gl=gb) установите необходимый дистрибутив.
После установки будет предложено создать пользователя и пароль для дистрибутива.

**6. Установка версии WSL для дистрибутива**

После установки дистрибутива, необходимо задать версию WSL, которую он будет использовать. Посмотреть текущую версию можно следующим образом

```powershell
wsl -l -v
```

Изменить текущую версию WSL для дистрибутива можно командой

```powershell
wsl --set-version <dist_name> 2
```

::: tip
Рекомендуется использовать WSL 2, т. к. он имеет более высокую производительность, чем WSL 1 
:::

## PHP
**PHP** - это скриптовый язык программирования, который используется для создания веб-приложений. PHP создан для работы на серверной стороне, а также обладает большим сообществом разработчиков и множеством библиотек, фреймворков и других инструментов.

### Установка PHP

**1. Добавление репозитория PPA ondrej/php**

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

**2. Установка PHP и расширений**

```bash
sudo apt install php8.2 php8.2-cli php8.2-{zip,curl,bz2,mbstring,intl,dom,xml}
```

**3. Проверить установку можно командой, которая выведет установленную версию PHP**

```bash
php -v
```

## Composer
**Composer** - это менеджер зависимостей для PHP, который позволяет управлять библиотеками и пакетами PHP, используемыми в проектах.

### Установка Composer

**1. Выполнить в терминале скрипт**

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

**2. Переместить исполняемый файл**

```bash
sudo mv composer.phar /usr/local/bin/composer
```

**3. Проверить установку можно командой, которая выведет установленную версию Composer**

```bash
composer --version
```

::: tip
Для корректной работы Composer рекомендуется установить cURL

```bash
sudo apt update
sudo apt install curl
```
:::

## NVM

**NVM** - это простой скрипт, который позволяет устанавливать, переключать и удалять версии Node.js на лету.

### Установка NVM

**1. Скачать и выполнить установочный скрипт**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

**2. Обновить конфигурацию профиля**

Процесс установки с шага 1 также должен автоматически добавить конфигурацию nvm в ваш профиль.
В случае использования zsh, это будет `~/.zshrc`. Если  используется bash, это будет `~/.bash_profile` или `.bashrc`.

Если конфигурация nvm не добавляется автоматически, можно добавить ее самостоятельно

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

**3. Перезагрузка конфигурации**

```bash
source ~/.bashrc
```

**4. Проверить установку можно командой, которая выведет установленную версию NVM**

```bash
nvm - v
```