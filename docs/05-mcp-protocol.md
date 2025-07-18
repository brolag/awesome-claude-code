# 🔌 MCP (Model Context Protocol)

## 🤖 ¿Qué es MCP?

**Model Context Protocol (MCP)** es un protocolo estándar abierto desarrollado por Anthropic que permite a los modelos de lenguaje (LLMs) conectarse de forma segura con sistemas externos como bases de datos, APIs, herramientas de desarrollo y servicios en la nube.

### **Arquitectura MCP**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     HOST        │    │     CLIENT      │    │     SERVER      │
│   (Claude Code) │◄──►│   (Protocolo)   │◄──►│  (Herramientas) │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

- **Host**: Claude Code, Claude Desktop, IDEs
- **Client**: Implementación del protocolo que maneja la comunicación
- **Server**: Programas que exponen capacidades específicas (bases de datos, APIs, etc.)

## ⚙️ Configuración de Servidores MCP

### **Comando Básico de Configuración**
```bash
# Sintaxis general
claude mcp add <nombre-servidor> [opciones] -- <comando-o-url>

# Agregar servidor local con variables de entorno
claude mcp add mi-servidor -e API_KEY=123 -e DB_URL=localhost -- /path/to/server

# Agregar servidor remoto vía SSE
claude mcp add api-server --transport sse https://api.example.com/mcp

# Agregar servidor HTTP
claude mcp add web-server --transport http https://api.example.com/mcp
```

### **Tipos de Transporte**

#### **1. STDIO (Local)**
```bash
# Servidor Node.js local
claude mcp add github-server -e GITHUB_TOKEN=$GITHUB_TOKEN -- npx @modelcontextprotocol/server-github

# Servidor Python local  
claude mcp add postgres-server -e DATABASE_URL=postgresql://user:pass@localhost/db -- python -m mcp_server_postgres

# Ejecutable compilado
claude mcp add custom-server -- ./bin/my-server
```

#### **2. SSE (Server-Sent Events)**
```bash
# API remota con SSE
claude mcp add analytics-server --transport sse https://analytics.empresa.com/mcp

# Con autenticación
claude mcp add secure-api --transport sse -e AUTH_TOKEN=$API_TOKEN https://secure-api.com/mcp
```

#### **3. HTTP (RESTful)**
```bash
# API REST estándar
claude mcp add rest-api --transport http https://api.example.com/mcp

# Con headers personalizados
claude mcp add custom-api --transport http -H "Authorization: Bearer $TOKEN" https://api.com/mcp
```

## 🛠️ Servidores MCP Populares

### **Desarrollo y Código**

#### **GitHub**
```bash
# Servidor oficial de GitHub
claude mcp add github -e GITHUB_TOKEN=$GITHUB_TOKEN -- npx @modelcontextprotocol/server-github

# Uso en Claude Code
"@github: Muestra los issues abiertos del repositorio user/repo"
"@github: Crea un PR para la rama feature/nueva-funcionalidad"
```

#### **GitLab**
```bash
# Servidor de GitLab
claude mcp add gitlab -e GITLAB_TOKEN=$GITLAB_TOKEN -- npx @modelcontextprotocol/server-gitlab

# Ejemplos de uso
"@gitlab: Lista los merge requests pendientes"
"@gitlab: Crea un issue con título 'Bug en login'"
```

### **Bases de Datos**

#### **PostgreSQL**
```bash
# Servidor PostgreSQL
claude mcp add postgres -e DATABASE_URL="postgresql://user:pass@localhost:5432/dbname" -- python -m mcp_server_postgres

# Ejemplos de uso
"@postgres: Describe la tabla users"
"@postgres: Ejecuta SELECT * FROM orders WHERE status='pending'"
"@postgres: Muestra el esquema de la base de datos"
```

#### **SQLite**
```bash
# Servidor SQLite
claude mcp add sqlite -e DB_PATH="./data.db" -- npx @modelcontextprotocol/server-sqlite

# Uso
"@sqlite: Lista todas las tablas"
"@sqlite: Ejecuta PRAGMA table_info(users)"
```

#### **MongoDB**
```bash
# Servidor MongoDB
claude mcp add mongo -e MONGODB_URI="mongodb://localhost:27017/mydb" -- npx @modelcontextprotocol/server-mongodb

# Ejemplos
"@mongo: Muestra las colecciones disponibles"
"@mongo: Busca documentos en la colección 'products' donde price > 100"
```

### **Servicios en la Nube**

#### **Google Drive**
```bash
# Servidor Google Drive
claude mcp add gdrive -e GOOGLE_APPLICATION_CREDENTIALS="./credentials.json" -- npx @modelcontextprotocol/server-gdrive

# Uso
"@gdrive: Lista archivos en la carpeta 'Documentos'"
"@gdrive: Busca archivos que contengan 'presupuesto'"
```

#### **Slack**
```bash
# Servidor Slack
claude mcp add slack -e SLACK_BOT_TOKEN=$SLACK_BOT_TOKEN -- npx @modelcontextprotocol/server-slack

# Ejemplos
"@slack: Envía mensaje al canal #general: 'Deploy completado'"
"@slack: Lista los últimos 10 mensajes del canal #dev"
```

### **Herramientas de Desarrollo**

#### **Puppeteer (Web Scraping)**
```bash
# Servidor Puppeteer
claude mcp add puppeteer -- npx @modelcontextprotocol/server-puppeteer

# Uso
"@puppeteer: Toma screenshot de https://example.com"
"@puppeteer: Extrae el título de https://news.ycombinator.com"
```

#### **Sentry (Monitoreo de Errores)**
```bash
# Servidor Sentry
claude mcp add sentry -e SENTRY_AUTH_TOKEN=$SENTRY_TOKEN -e SENTRY_ORG=mi-org -- npx @modelcontextprotocol/server-sentry

# Ejemplos
"@sentry: Muestra los errores más frecuentes del último día"
"@sentry: Lista issues del proyecto mi-app"
```

#### **Figma (Diseño)**
```bash
# Servidor Figma
claude mcp add figma -e FIGMA_ACCESS_TOKEN=$FIGMA_TOKEN -- npx @modelcontextprotocol/server-figma

# Uso
"@figma: Exporta componentes del archivo diseño-sistema"
"@figma: Lista todos los archivos del equipo"
```

## 🔧 Gestión de Servidores MCP

### **Comandos de Administración**
```bash
# Listar servidores configurados
claude mcp list

# Remover servidor
claude mcp remove nombre-servidor

# Reiniciar servidor específico
claude mcp restart nombre-servidor

# Verificar estado de servidores
claude mcp status
```

### **Configuración Avanzada**

#### **Archivo de Configuración (.mcp.json)**
```json
{
  "mcpServers": {
    "postgres": {
      "command": "python",
      "args": ["-m", "mcp_server_postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/mydb"
      }
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "api-server": {
      "transport": "sse",
      "url": "https://api.empresa.com/mcp",
      "headers": {
        "Authorization": "Bearer ${API_TOKEN}"
      }
    }
  }
}
```

#### **Variables de Entorno Seguras**
```bash
# En .env (no commitear)
GITHUB_TOKEN=ghp_xxxxxxxxxxxx
DATABASE_URL=postgresql://user:pass@localhost/db
SLACK_BOT_TOKEN=xoxb-xxxxxxxxxxxx
SENTRY_AUTH_TOKEN=xxxxxxxxxxxx

# Referenciar en configuración MCP
claude mcp add github -e GITHUB_TOKEN=$GITHUB_TOKEN -- npx @modelcontextprotocol/server-github
```

## 🔐 Autenticación y Seguridad

### **OAuth 2.0 para Servicios Remotos**
```bash
# Configurar OAuth interactivamente
claude mcp add google-service --oauth

# Usar en Claude Code
/mcp
# Claude Code abrirá el navegador para autenticación
```

### **Autenticación con API Keys**
```bash
# Método seguro con variables de entorno
claude mcp add secure-api -e API_KEY=$SECRET_API_KEY -- comando

# Evitar hardcodear secrets
# ❌ Malo
claude mcp add api -e API_KEY=123456789 -- comando

# ✅ Bueno  
claude mcp add api -e API_KEY=$API_KEY -- comando
```

### **Permisos y Restricciones**
```bash
# Configurar permisos específicos
claude mcp add readonly-db --read-only -e DB_URL=$DATABASE_URL -- servidor-db

# Restringir a operaciones específicas
claude mcp add limited-api --allowed-operations read,list -- api-server
```

## 📚 Uso de Recursos MCP

### **Sintaxis de Referencias**
```bash
# Formato general
"@servidor: comando o consulta"

# Ejemplos específicos
"@postgres: DESCRIBE TABLE users"
"@github: GET /repos/owner/repo/issues"
"@slack: Envía mensaje a #general"
```

### **Referencias Múltiples**
```bash
# Combinar múltiples servidores en una consulta
"Compara los datos de @postgres con la información de @github y envía resumen a @slack"

# Workflow complejo
"Basándote en los errores de @sentry, crea issues en @github y notifica al equipo en @slack"
```

### **Comandos Slash de MCP**
```bash
# Los servidores MCP pueden exponer comandos slash
/mcp__postgres__schema     # Mostrar esquema de BD
/mcp__github__issues       # Listar issues
/mcp__slack__channels      # Listar canales
```

## 🛠️ Desarrollo de Servidores MCP Custom

### **Estructura Básica (Node.js)**
```javascript
// mi-servidor-mcp.js
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'mi-servidor-custom',
    version: '1.0.0',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Definir herramientas disponibles
server.setRequestHandler('tools/list', async () => ({
  tools: [
    {
      name: 'mi_herramienta',
      description: 'Descripción de mi herramienta',
      inputSchema: {
        type: 'object',
        properties: {
          parametro: { type: 'string' }
        }
      }
    }
  ]
}));

// Manejar llamadas a herramientas
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'mi_herramienta') {
    // Lógica de la herramienta
    return {
      content: [
        {
          type: 'text',
          text: `Resultado: ${request.params.arguments.parametro}`
        }
      ]
    };
  }
});

// Iniciar servidor
const transport = new StdioServerTransport();
await server.connect(transport);
```

### **Registro del Servidor Custom**
```bash
# Hacer el archivo ejecutable
chmod +x mi-servidor-mcp.js

# Registrar en Claude Code
claude mcp add mi-servidor -- node mi-servidor-mcp.js

# Usar en Claude Code
"@mi-servidor: mi_herramienta con parametro='test'"
```

## ⚠️ Mejores Prácticas y Seguridad

### **Seguridad**
```bash
# ✅ Usar variables de entorno para secrets
claude mcp add secure -e SECRET=$SECRET_VAR -- servidor

# ✅ Verificar origen de servidores de terceros
# Solo usar servidores MCP de fuentes confiables

# ❌ No hardcodear credenciales
claude mcp add insegure -e SECRET=mi-password-secreto -- servidor
```

### **Performance**
```bash
# ✅ Configurar timeouts apropiados
claude mcp add api --timeout 30000 -- servidor-lento

# ✅ Usar cachés cuando sea posible
claude mcp add cached-api --cache-ttl 3600 -- servidor-api
```

### **Debugging**
```bash
# Habilitar debug de MCP
claude --mcp-debug

# Ver logs de servidor específico
claude mcp logs nombre-servidor

# Test de conectividad
claude mcp test nombre-servidor
```

---

*MCP es la clave para extender las capacidades de Claude Code. Úsalo para conectar con tu infraestructura y herramientas existentes.*