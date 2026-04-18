# 🌱 SRIG – Smart Drip Irrigation System

SRIG (Smart Drip Irrigation System) is an **academic project** developed as part of the **IPIW32 integrative project** within the **Industrial Processes and Operations** program at the **Universidad Tecnológica de Ciudad Juárez (UTCJ)**.

The project focuses on the design and implementation of a **small-scale automated drip irrigation system**, applying principles of process control, automation, operational safety, and efficient resource usage in a real academic environment.

---

## 📌 Project Purpose

The main objective of SRIG is to **integrate theoretical and practical knowledge** acquired during the Industrial Processes and Operations program through the development of a functional automated system.

This project aims to:

- Apply **process monitoring and control concepts**
- Implement **basic automation strategies**
- Promote **efficient use of water resources**
- Ensure **safe operating conditions**
- Demonstrate system behavior under real conditions
- Serve as an **educational and demonstrative reference**

SRIG is **not intended to be a commercial or industrial solution** and must be understood strictly within an academic context.

---

## ⚙️ System Overview

SRIG operates as an **automated drip irrigation process**, controlling water supply based on predefined operating modes and system conditions.

### Main features:
- Two independent irrigation zones
- Manual and automatic operating modes
- Soil moisture-based logic
- Scheduled (timer-based) irrigation
- Safety mechanisms for abnormal conditions
- Local monitoring and control
- Web-based user interface

---

## 🧠 System Architecture

The system is centered around an **ESP32 microcontroller**, acting as the main controller and decision core.

### Key components:
- **ESP32 Controller**
- **Soil moisture and water flow sensors**
- **Relay modules for solenoid valve control**
- **Two irrigation solenoid valves**
- **Web interface (AP / STA mode)**
- **Physical start/stop buttons**
- Optional remote sensors using **ESP-NOW**

The architecture follows a **safety-first principle**: any detected failure or abnormal condition results in the automatic shutdown of irrigation.

---

## 🖥️ Web Interface

The SRIG web interface allows users to:

- Monitor system status
- Select operating modes
- Manually control irrigation
- Navigate system documentation

The interface supports **multi-language operation (Spanish and English)**, including translated diagrams and documentation elements.

---

## 🌍 Project Location

The system was designed and implemented specifically for a green area known as **“Jardín HJ”**, located within the UTCJ campus.

The configuration responds exclusively to the conditions of this area and **is not intended as a generic irrigation solution**.

---

## 📁 Repository Structure

```
/
├── index.html        # Main web interface
├── sw.js             # Service Worker (PWA support)
├── manifest.json     # PWA configuration
├── img/              # Images and diagrams (ES / EN)
├── js/               # JavaScript files
│   └── app.js        # Main application logic
├── css/              # Stylesheets
│   └── styles.css    # Main styles
└── README.md         # Project documentation
```
---

## ⚠️ Legal Notice & Usage Restrictions

This project was developed **exclusively for educational purposes**.

SRIG **does not constitute a commercial, industrial, or certified product**, nor is it intended for commercialization or large-scale deployment.

All information, diagrams, images, and technical resources included in this repository are provided **solely for academic, instructional, and demonstrative use**.

**Any use, reproduction, adaptation, or implementation of this system outside its original academic context is the sole responsibility of the individual or entity undertaking such actions.**

The Universidad Tecnológica de Ciudad Juárez (UTCJ) and the project developers **assume no responsibility** for damages or consequences resulting from unintended use or non-academic implementations.

---

## 📚 Academic Context

- Institution: Universidad Tecnológica de Ciudad Juárez (UTCJ)
- Program: Industrial Processes and Operations
- Integrative Project: IPIW32
- Scope: Academic and demonstrative
- Status: Educational prototype

---

## ✅ Final Notes

SRIG serves as a **practical learning exercise** and a demonstrative reference for automation and process control concepts within an academic environment.
---
## 🔔 Important Notice — Code Synchronization Status
This repository is intended primarily as a documentation, reference, and dissemination resource for the SRIG academic project. During the development of the system, multiple iterations and refinements were carried out, particularly in the areas of control logic, safety handling, and documentation integration.
As part of the academic workflow, the most up-to-date and validated versions of the system logic, architecture, and operational behavior are formally documented in the project reports and technical documentation, rather than being continuously synchronized with the public web repository.
The purpose of the code published here is to:

- Illustrate the general structure and approach of the web interface and application logic
- Support the understanding of the system architecture and design decisions
- Serve as a reference implementation, not as a production-ready or final release

For evaluation, validation, and methodological reference, the official and authoritative description of the system should be considered the written academic documentation associated with the SRIG project.

---
---

# 🌱 SRIG – Sistema de Riego Inteligente por Goteo

SRIG (Sistema de Riego Inteligente por Goteo) es un **proyecto académico** desarrollado como parte de la **integradora IPIW32**, perteneciente a la carrera de **Procesos y Operaciones Industriales** de la **Universidad Tecnológica de Ciudad Juárez (UTCJ)**.

El proyecto se centra en el diseño e implementación de un **sistema automatizado de riego por goteo a pequeña escala**, aplicando principios de control de procesos, automatización, seguridad operativa y uso eficiente de recursos en un entorno académico real.

---

## 📌 Propósito del proyecto

El objetivo principal de SRIG es **integrar los conocimientos teóricos y prácticos** adquiridos durante la carrera mediante el desarrollo de un sistema automatizado funcional.

Este proyecto busca:

- Aplicar conceptos de **control y monitoreo de procesos**
- Implementar **automatización básica**
- Promover el **uso eficiente del agua**
- Garantizar **condiciones seguras de operación**
- Demostrar el comportamiento del sistema en condiciones reales
- Servir como **referencia educativa y demostrativa**

SRIG **no está diseñado como un producto comercial o industrial** y debe entenderse únicamente dentro del ámbito académico.

---

## ⚙️ Descripción general del sistema

SRIG opera como un **proceso automatizado de riego por goteo**, controlando el suministro de agua conforme a modos de operación y condiciones definidas.

### Características principales:
- Dos zonas de riego independientes
- Modos de operación manual y automático
- Control basado en humedad del suelo
- Riego programado por horario
- Mecanismos de seguridad ante fallas
- Monitoreo y control local
- Interfaz web

---

## 🧠 Arquitectura del sistema

El sistema está basado en un **microcontrolador ESP32**, que actúa como el cerebro del sistema.

### Componentes principales:
- **Controlador ESP32**
- **Sensores de humedad y caudal**
- **Módulos de relevadores**
- **Electroválvulas de riego**
- **Interfaz web (AP / STA)**
- **Botones físicos**
- Sensores remotos opcionales mediante **ESP‑NOW**

La arquitectura sigue el principio de **seguridad ante todo**: cualquier condición anómala provoca el cierre automático del riego.

---

## 🖥️ Interfaz web

La interfaz web permite:

- Supervisar el estado del sistema
- Seleccionar modos de operación
- Controlar el riego manualmente
- Consultar información del proyecto

Cuenta con soporte **multi‑idioma (español e inglés)**, incluyendo diagramas técnicos según el idioma seleccionado.

---

## 🌍 Ubicación del proyecto

El sistema fue diseñado e implementado específicamente para el área verde **“Jardín HJ”**, dentro del campus de la UTCJ.

El diseño responde exclusivamente a las condiciones de dicha área y **no se considera una solución genérica**.

---

## ⚠️ Aviso legal y restricciones de uso

Este proyecto fue desarrollado **exclusivamente con fines educativos**.

SRIG **no constituye un producto comercial, industrial o certificado**, ni está destinado a su implementación masiva.

Toda la información, imágenes, diagramas y recursos técnicos incluidos en este repositorio tienen un **uso únicamente académico, informativo y demostrativo**.

**Cualquier uso, reproducción, modificación o implementación fuera del entorno académico original es responsabilidad exclusiva de quien lo lleve a cabo.**

La Universidad Tecnológica de Ciudad Juárez (UTCJ) y los desarrolladores del proyecto **no asumen responsabilidad** por daños o consecuencias derivadas de usos no previstos.

---

## 📚 Contexto académico

- Institución: Universidad Tecnológica de Ciudad Juárez (UTCJ)
- Carrera: Procesos y Operaciones Industriales
- Integradora: IPIW32
- Alcance: Académico y demostrativo
- Estado: Prototipo educativo

---

## ✅ Nota final

SRIG representa un **ejercicio práctico de aprendizaje** y una referencia demostrativa para el estudio de sistemas automatizados dentro de un contexto académico.

---
## 🔔 Aviso importante — estado de sincronización del código
Este repositorio tiene como finalidad principal servir como un recurso de documentación, referencia y difusión del proyecto académico SRIG. A lo largo del desarrollo del sistema se realizaron múltiples iteraciones y ajustes, especialmente en aspectos relacionados con la lógica de control, las políticas de seguridad y la integración documental.
Como parte del flujo de trabajo académico, las versiones más actualizadas y validadas del sistema, así como su arquitectura, comportamiento y criterios de operación, se documentaron formalmente en los reportes técnicos y documentos del proyecto, y no se mantuvieron sincronizadas de forma continua con el repositorio web público.
El código publicado en este repositorio tiene como propósito:

- Mostrar la estructura general de la interfaz web y la lógica de la aplicación
- Facilitar la comprensión de la arquitectura y las decisiones de diseño
- Funcionar como una implementación de referencia, no como una versión final o de producción

Para fines de evaluación, validación técnica y referencia metodológica, debe considerarse como fuente oficial del proyecto la documentación académica escrita asociada al SRIG.
