---
title: "`ScrollContainer` doesn't scroll with click and drag"
created: 2024-07-04T04:55:45Z
modified: 2024-09-19T04:26:37Z
aliases:
- "`ScrollContainer` doesn't scroll with click and drag"
tags:
- godot
---

# `ScrollContainer` doesn't scroll with click and drag

In Godot, mouse and touch inputs are treated as separate inputs and by default, Godot will emulate mouse events with touch but not the other way around. To make `ScrollContainer` elements scroll with mouse click and drag events, enable `Input Devices > Pointing > Emulate Touch From Mouse`.

# History

- [202401270014](../entries/202401270014.md)
