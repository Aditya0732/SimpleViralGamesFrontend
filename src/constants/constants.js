import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

export const plans = [
    {
        id: 1,
        name: 'Arcade',
        icon: arcade,
        monthlyRate: 9,
        yearlyRate: 90,
    },
    {
        id: 2,
        name: 'Advanced',
        icon: advanced,
        monthlyRate: 12,
        yearlyRate: 120,
    },
    {
        id: 3,
        name: 'Pro',
        icon: pro,
        monthlyRate: 15,
        yearlyRate: 150,
    },
];

export const addOns = [
    {
        id: 1,
        name: 'Online service',
        description: 'Access to multiplayer games',
        price: 1,
    },
    {
        id: 2,
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        price: 2,
    },
    {
        id: 3,
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: 2,
    },
];