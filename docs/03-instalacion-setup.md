# ⚙️ Instalación y Setup

## 📦 Instalación Básica

### **Instalación Global via npm**

```bash
# Instalar Claude Code globalmente
npm install -g @anthropic-ai/claude-code

# Verificar instalación
claude --version
```

### **Instalación Alternativa via npx**

```bash
# Usar sin instalar globalmente
npx @anthropic-ai/claude-code

# Para uso en un proyecto específico
cd mi-proyecto
npx @anthropic-ai/claude-code
```

### **Instalación en Entornos Específicos**

#### **Docker**
```dockerfile
FROM node:20-alpine
RUN npm install -g @anthropic-ai/claude-code
WORKDIR /app
CMD ["claude"]
```

#### **GitHub Codespaces / Devcontainers**
```json
{
  "name": "Claude Code Dev Environment",
  "image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:20",
  "postCreateCommand": "npm install -g @anthropic-ai/claude-code"
}
```

## 🔑 Configuración de API Key

### **Método 1: Variable de Entorno**
```bash
# Agregar a tu .bashrc, .zshrc, etc.
export ANTHROPIC_API_KEY="tu-api-key-aqui"

# O exportar para la sesión actual
export ANTHROPIC_API_KEY="sk-ant-api03-..."
```

### **Método 2: Archivo de Configuración**
```bash
# Crear archivo de configuración
mkdir -p ~/.claude
echo "ANTHROPIC_API_KEY=tu-api-key-aqui" > ~/.claude/config
```

### **Método 3: Configuración Interactiva**
```bash
# Claude Code te pedirá la API key en el primer uso
claude
# Ingresa tu API key cuando se solicite
```

### **Obtener tu API Key**
1. Visita [console.anthropic.com](https://console.anthropic.com)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" en el dashboard
4. Genera una nueva API key
5. Copia la key (comienza con `sk-ant-api03-...`)

## 🎯 Configuración de Modelos

### **Modelos Disponibles**

| Modelo | Nombre CLI | Uso Recomendado | Velocidad | Capacidades |
|---|---|---|---|---|
| **Claude 3.5 Sonnet** | `sonnet` | Desarrollo general | ⚡⚡⚡ | Código, análisis, refactoring |
| **Claude 3 Opus** | `opus` | Tareas complejas | ⚡⚡ | Arquitectura, debugging avanzado |
| **Claude 3.5 Haiku** | `haiku` | Tareas rápidas | ⚡⚡⚡⚡ | Consultas simples, snippets |

### **Configurar Modelo por Defecto**
```bash
# Configurar modelo globalmente
claude config set model sonnet

# Especificar modelo para sesión
claude --model opus

# Cambiar modelo durante sesión
/model sonnet
```

## 🏢 Setup para Equipos

### **Configuración Compartida (.claude)**

Crea un archivo `.claude/settings.json` en la raíz del proyecto:

```json
{
  "model": "sonnet",
  "allowedTools": ["bash", "edit", "read"],
  "projectSettings": {
    "language": "typescript",
    "framework": "react",
    "testFramework": "jest"
  },
  "hooks": {
    "preToolUse": "./scripts/pre-tool.sh",
    "postEdit": "npm run lint"
  }
}
```

### **Variables de Entorno del Proyecto**

Crea `.claude/env`:
```bash
# Configuración específica del proyecto
ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
NODE_ENV=development
DEBUG=true
```

### **Archivo CLAUDE.md**

Crea `CLAUDE.md` en la raíz del proyecto para dar contexto:

```markdown
# Mi Proyecto

## Descripción
Este es un proyecto React con TypeScript que...

## Estructura
- `/src` - Código fuente
- `/tests` - Tests unitarios  
- `/docs` - Documentación

## Comandos importantes
- `npm run dev` - Desarrollo
- `npm run test` - Ejecutar tests
- `npm run build` - Build de producción

## Convenciones
- Usar camelCase para variables
- Componentes en PascalCase
- Tests en archivos `.test.ts`
```

## 🔌 Integración con IDEs

### **VS Code**

Instala la extensión oficial de Claude Code:

1. Abre VS Code
2. Ve a Extensions (`Ctrl+Shift+X`)
3. Busca "Claude Code"
4. Instala la extensión oficial de Anthropic

**Configuración en settings.json:**
```json
{
  "claude.apiKey": "${env:ANTHROPIC_API_KEY}",
  "claude.model": "sonnet",
  "claude.autoComplete": true,
  "claude.terminal.integration": true
}
```

### **JetBrains IDEs (IntelliJ, WebStorm, etc.)**

**Plugin disponible en JetBrains Marketplace:**

1. Ve a `File` → `Settings` → `Plugins`
2. Busca "Claude Code"
3. Instala y reinicia el IDE

**Configuración:**
```xml
<!-- .idea/claude-code.xml -->
<component name="ClaudeCodeSettings">
  <option name="apiKey" value="${env:ANTHROPIC_API_KEY}" />
  <option name="model" value="sonnet" />
  <option name="autoSuggest" value="true" />
</component>
```

### **Vim/Neovim**

**Plugin via vim-plug:**
```vim
" En tu .vimrc o init.vim
Plug 'anthropic/claude-code.vim'

" Configuración
let g:claude_api_key = $ANTHROPIC_API_KEY
let g:claude_model = 'sonnet'

" Keybindings
nnoremap <leader>cc :ClaudeCode<CR>
nnoremap <leader>ca :ClaudeAsk<CR>
```

## 🚀 Configuración Avanzada

### **Proxy Corporativo**
```bash
# Configurar proxy
export HTTPS_PROXY=http://proxy.empresa.com:8080
export HTTP_PROXY=http://proxy.empresa.com:8080

# O en archivo de configuración
claude config set proxy http://proxy.empresa.com:8080
```

### **Logging y Debug**
```bash
# Habilitar logging detallado
claude --verbose

# Debug de MCP
claude --mcp-debug

# Logs en archivo
claude --log-file claude.log
```

### **Configuración de Timeouts**
```json
{
  "timeout": {
    "request": 30000,
    "tool": 120000,
    "session": 3600000
  }
}
```

## ✅ Verificación de Instalación

### **Test de Funcionalidad Básica**
```bash
# Test básico
claude -p "¿Qué es 2+2?"

# Test de lectura de archivos
claude -p "Lista los archivos en el directorio actual"

# Test de ejecución de comandos
claude -p "Ejecuta 'git status'"
```

### **Diagnóstico de Problemas**
```bash
# Verificar configuración
claude --doctor

# Información del sistema
claude --system-info

# Test de conectividad
claude --test-connection
```

## 🔧 Troubleshooting Común

### **Error: "API key not found"**
```bash
# Verificar variable de entorno
echo $ANTHROPIC_API_KEY

# Configurar si está vacía
export ANTHROPIC_API_KEY="tu-api-key"
```

### **Error: "Node.js version not supported"**
```bash
# Verificar versión de Node.js
node --version

# Actualizar Node.js si es necesario
nvm install 20
nvm use 20
```

### **Error: "Permission denied"**
```bash
# Instalar con permisos
sudo npm install -g @anthropic-ai/claude-code

# O usar npm sin sudo
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

---

*¡Listo! Ahora tienes Claude Code configurado y funcionando. Ve a la siguiente sección para aprender los comandos esenciales.*