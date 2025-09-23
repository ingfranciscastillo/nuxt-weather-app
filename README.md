# 🌤️ Weather App - Aplicación del Clima

Una aplicación moderna de pronóstico del clima construida con **Nuxt 4**, **Vue** y **Tailwind CSS**. Obtén información detallada del clima actual y pronósticos de 5 días para cualquier ciudad del mundo.

![Weather App](/cap.png)

## ✨ Características

- 🌍 **Búsqueda por ciudad** - Encuentra información del clima de cualquier lugar
- 📊 **Pronóstico de 5 días** - Planifica tu semana con anticipación
- 🌙 **Modo oscuro** - Interfaz adaptable con persistencia de preferencias
- 📱 **Diseño responsivo** - Funciona perfectamente en móviles y escritorio
- ⚡ **Rendimiento optimizado** - Carga rápida con Nuxt 3
- 🎨 **Animaciones suaves** - Experiencia de usuario fluida
- 💾 **Persistencia local** - Recuerda tu última ciudad consultada
- 🛡️ **Seguridad** - Headers de seguridad configurados
- 🚨 **Manejo de errores** - Modales informativos para errores

## 🛠️ Tecnologías

- **[Nuxt 4](https://nuxt.com/)** - Framework Vue.js de última generación
- **[Vue](https://vuejs.org/)** - Framework JavaScript reactivo
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **[Pinia](https://pinia.vuejs.org/)** - Store de estado para Vue
- **[Headless UI](https://headlessui.com/)** - Componentes UI accesibles
- **[Heroicons](https://heroicons.com/)** - Iconografía SVG
- **[OpenWeatherMap API](https://openweathermap.org/api)** - Datos meteorológicos

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Cuenta en [OpenWeatherMap](https://openweathermap.org/api)

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nuxt-weather-app.git
cd nuxt-weather-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
NUXT_OPEN_WEATHER_API_KEY=tu-api-key-de-openweather
```

### 4. Obtener API Key de OpenWeatherMap

1. Regístrate en [OpenWeatherMap](https://openweathermap.org/api)
2. Verifica tu cuenta por email
3. Ve a tu [API Keys](https://home.openweathermap.org/api_keys)
4. Copia tu API Key gratuita
5. Agrégala al archivo `.env`

### 5. Ejecutar la aplicación

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
nuxt-weather-app/
├── app/                    # Aplicación Nuxt
│   ├── components/         # Componentes Vue reutilizables
│   ├── pages/             # Páginas de la aplicación
│   └── assets/            # Recursos estáticos
├── server/                # API del servidor
├── public/                # Archivos públicos
├── nuxt.config.ts         # Configuración de Nuxt
└── package.json           # Dependencias del proyecto
```

## 🎯 Uso

1. **Buscar ciudad**: Escribe el nombre de cualquier ciudad en el campo de búsqueda
2. **Ver clima actual**: Obtén temperatura, humedad, viento y más información
3. **Pronóstico**: Navega por el pronóstico de 5 días
4. **Modo oscuro**: Alterna entre tema claro y oscuro
5. **Persistencia**: Tu última ciudad se guarda automáticamente

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Generar sitio estático
npm run generate

# Vista previa de producción
npm run preview

# Preparar Nuxt (postinstall)
npm run postinstall
```

## 🌐 API y Datos

La aplicación utiliza la [OpenWeatherMap API](https://openweathermap.org/api) para obtener:

- **Clima actual**: Temperatura, humedad, presión, viento, visibilidad
- **Pronóstico**: Datos de 5 días con intervalos de 3 horas
- **Ubicación**: Coordenadas y zona horaria
- **Iconos**: Representación visual del clima

### Endpoints utilizados:

- `GET /data/2.5/weather` - Clima actual
- `GET /data/2.5/forecast` - Pronóstico de 5 días

## 🔒 Seguridad

El proyecto incluye configuraciones de seguridad:

- **Content Security Policy (CSP)** configurado
- **Headers de seguridad** implementados
- **Validación de entrada** en formularios
- **Variables de entorno** para claves API

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ usando Nuxt 4

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!
