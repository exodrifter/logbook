---
title: "`AnimationPlayer` doesn't interpolate shader parameter"
created: 2024-05-27T09:19:01Z
modified: 2024-09-19T04:26:37Z
aliases:
- "`AnimationPlayer` doesn't interpolate shader parameter"
tags:
- godot
---

# `AnimationPlayer` doesn't interpolate shader parameter

In Godot 4.2.1, an `AnimationPlayer` won't interpolate a new shader parameter track due to [godotengine/godot#87040](https://github.com/godotengine/godot/issues/87040#issuecomment-1887424734):

> [TokageItLab](https://github.com/godotengine/godot/issues/87040#issuecomment-1887424734):
>
> As noted in [#75125 (comment)](https://github.com/godotengine/godot/issues/75125#issuecomment-1568624735), as long as it is an initial value, the Variant type is not properly assigned, so keying to the initial value seems to insert Nil.

The workaround for this is edit all key frames in all animations with null values to a value different from the initial value. This causes the type to be assigned properly. After this is done, the value can be set back to the default value.

# History

- [20240527095110](../entries/20240527095110.md)
- [202405031856](../entries/202405031856.md)
