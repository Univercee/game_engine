
import ActionName from '../types/ActionNames'

import background from './assets/background.png'

import github from './assets/github.png'

import hud_a from './assets/hud_a.png'
import hud_d from './assets/hud_d.png'
import hud_e from './assets/hud_e.png'
import hud_shift from './assets/hud_shift.png'
import hud_space from './assets/hud_space.png'

import blue_dino from './assets/BlueDino.png'
import red_dino from './assets/RedDino.png'
import green_dino from './assets/GreenDino.png'
import yellow_dino from './assets/YellowDino.png'

import blue_cristall from './assets/BlueCristall.png'
import red_cristall from './assets/RedCristall.png'
import green_cristall from './assets/GreenCristall.png'
import yellow_cristall from './assets/YellowCristall.png'
import { Sprite } from '../core/Objects/Sprite'

export const red_dino_sprite: Sprite = new Sprite(
    red_dino,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 4]], 
        [ActionName._1_Walk, [4, 10]],
        [ActionName._3_Jump, [11, 11]], 
        [ActionName._2_Run, [18, 24]]
    ]),
    24
)
export const blue_dino_sprite: Sprite = new Sprite(
    blue_dino,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 4]], 
        [ActionName._1_Walk, [4, 10]], 
        [ActionName._3_Jump, [11, 11]], 
        [ActionName._2_Run, [18, 24]]
    ]),
    24
)
export const green_dino_sprite: Sprite = new Sprite(
    green_dino,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 4]], 
        [ActionName._1_Walk, [4, 10]], 
        [ActionName._3_Jump, [11, 11]], 
        [ActionName._2_Run, [18, 24]]
    ]),
    24
)
export const yellow_dino_sprite: Sprite = new Sprite(
    yellow_dino,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 4]], 
        [ActionName._1_Walk, [4, 10]], 
        [ActionName._3_Jump, [11, 11]], 
        [ActionName._2_Run, [18, 24]]
    ]),
    24
)
export const blue_cristall_sprite: Sprite = new Sprite(
    blue_cristall,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 6]]
    ]),
    6
)
export const red_cristall_sprite: Sprite = new Sprite(
    red_cristall,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 6]]
    ]),
    6
)
export const green_cristall_sprite: Sprite = new Sprite(
    green_cristall,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 6]]
    ]),
    6
)
export const yellow_cristall_sprite: Sprite = new Sprite(
    yellow_cristall,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 6]]
    ]),
    6
)
export const hud_a_sprite: Sprite = new Sprite(
    hud_a,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 1]]
    ]),
    1
)
export const hud_d_sprite: Sprite = new Sprite(
    hud_d,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 1]]
    ]),
    1
)
export const hud_e_sprite: Sprite = new Sprite(
    hud_e,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 1]]
    ]),
    1
)
export const hud_shift_sprite: Sprite = new Sprite(
    hud_shift,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 1]]
    ]),
    1
)
export const hud_space_sprite: Sprite = new Sprite(
    hud_space,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 1]]
    ]),
    1
)
export const background_sprite: Sprite = new Sprite(
    background,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 1]]
    ]),
    1
)

export const github_sprite: Sprite = new Sprite(
    github,
    new Map<ActionName, [number, number]>([
        [ActionName._0_Idle, [0, 1]]
    ]),
    1
)