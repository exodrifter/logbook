---
aliases:
- "`TextureRect` does not scale nicely"
---

# `TextureRect` does not scale nicely

By default, `TextureRect` in [Godot](godot.md) uses nearest filtering instead of linear filtering which can cause things in the original texture, like lines, to appear jagged. To change this, you can change the `texture_filter` value from the base`CanvasItem` class.

# History

![20240722_203732](../entries/20240722_203732.md)
