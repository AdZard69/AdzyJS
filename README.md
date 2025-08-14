<div align="center">

# AdzyJS

<img src="/adzyjs-logo.png" alt="AdzyJS Logo" width="400"/>

**The simplest way to bring Minecraft characters into your React Three Fiber projects.**

</div>

<p align="center">
<a href="https://www.npmjs.com/package/adzyjs">
<img src="https://img.shields.io/npm/v/adzyjs.svg?style=for-the-badge&logo=npm" alt="NPM Version">
<!-- </a>
<a href="https://github.com/your-username/adzyjs/blob/main/LICENSE">
<img src="https://img.shields.io/npm/l/adzyjs.svg?style=for-the-badge" alt="License">
</a>
<a href="#-contributing">
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome">
</a> -->
</p>

---

## 📖 About

AdzyJS is a **React Three Fiber** component library built with a single guiding philosophy:  
> *Complex and Repetitive tasks should have simple, elegant solutions.*

It completely abstracts away the tedious pipeline of modeling, converting, and debugging, encapsulating it all into **one declarative and intuitive component**:

```jsx
<Player skinUrl="/my-custom-skin.png" />
```

---

## ❌ The Problem

In web-based 3D graphics, especially with React Three Fiber, bringing the blocky, pixel-perfect look of Minecraft into a project has traditionally been a **multi-step, frustrating process**:

1. Craft a model in **Blockbench**  
2. Export it as a `.gltf` file  
3. Run it through a code converter  
4. Integrate generated code into a React project  
5. Debug **Three.js** material issues  
6. Fix transparency sorting bugs  
7. Configure texture filtering for a crisp pixel-art look  

This workflow turned a fun idea into hours of repetitive technical work.

---

## 💡 The Solution: AdzyJS

AdzyJS takes all those steps and wraps them into a **single, reusable React component**.

It:

- Loads 3D model geometry  
- Creates **two materials** for perfect opaque + transparent layer rendering  
- Applies **NearestFilter** for pixel-perfect visuals  
- Handles all **Three.js transparency quirks** under the hood  

What once took hours can now be done in **one line of code**.

---

## 🚀 Quick Start

### 1️⃣ Installation

```bash
npm install adzyjs three @react-three/fiber @react-three/drei
# or
yarn add adzyjs three @react-three/fiber @react-three/drei
```

### 2️⃣ Usage

```jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Player } from 'adzyjs';

function App() {
  return (
   <Player
      w="100vw"
      h="100vh"
      skinUrl="/my-custom-skin.png"
      color1="#111827"
      color2="#4b5563"/>
  );
}

export default App;
```

---

## ✨ Features

- 📦 **Declarative API** – Just `<Player />` and you’re done  
- 🖼 **Automatic Texturing** – Pass any Minecraft skin URL  
- 🪞 **Transparency Handling** – No more Z-fighting or layer issues  
- 🎯 **Pixel-Perfect** – NearestFilter preserves the blocky Minecraft look  
- ⚡ **Lightweight** – Optimized for React Three Fiber performance  

---

## 🗺 Roadmap

- [ ] Animation system (idle, walk, run, jump)  
- [ ] Additional mobs (Creeper, Zombie, Skeleton, etc.)  

---

## ❤️ Contributing

Built for developers, by a developer — AdzyJS is designed to **enhance creativity** and **accelerate development**.  

Want to help?  

1. Fork the repo  
2. Create a feature branch  
3. Submit a pull request  

---

<p align="center">
Whether you're building an interactive portfolio, a fan project, a browser-based game,  
or just experimenting with 3D on the web — AdzyJS lets you focus on <strong>building amazing experiences</strong>.
</p>
