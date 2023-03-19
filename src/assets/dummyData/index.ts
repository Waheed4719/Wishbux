import { CardPropType } from '../../types';
import InfinityIcon from '../images/infinity.svg';
import ChargeBackIcon from '../images/chargeback.svg';
import CogsIcon from '../images/cogs.svg';
import PeopleIcon from '../images/people.svg';
import IdeaIcon from '../images/idea.svg';
import HiddenIcon from '../images/hidden.svg';
import HeartPlusIcon from '../images/heart-plus.svg';
import DollarIcon from '../images/dollar.svg';
import HeartIcon from '../images/heart.svg';
import MoneyIcon from '../images/money.svg';
import MicrophoneIcon from '../images/microphone.svg';
import PeopleLockIcon from '../images/people-lock.svg';

export const benefitItems: CardPropType[] = [
    {
        title: 'Real Human Support',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: PeopleIcon
    },
    {
        title: 'No Hidden Charges or Fees',
        description: 'Against Patreon, Twitch, Amazon or Paypal',
        icon: HiddenIcon
    },
    {
        title: 'Control your orders',
        description: 'Decide when your orders get placed, add to orders, or keep the cash.',
        icon: CogsIcon
    },
    {
        title: 'Unlimited Selection',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: InfinityIcon
    },
    {
        title: 'Chargeback Protection',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: ChargeBackIcon
    },
    {
        title: 'Gift Suggestions',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: IdeaIcon
    }
];

export const howItWorks: CardPropType[] = [
    {
        title: 'Create a free wishlist',
        description:
            "Create a free wishlist and add anything you'd like your fans to fund. Some ideas include...",
        icon: HeartPlusIcon
    },
    {
        title: 'Share to your followers',
        description: 'Share your wishlist on your social media profile',
        icon: PeopleIcon
    },
    {
        title: 'Get paid in cash',
        description: 'When someone buys a wish list item, you get paid the cash equivalent',
        icon: DollarIcon
    }
];

export const features: CardPropType[] = [
    {
        title: '100% Payout',
        description: 'No fees or hidden charges',
        icon: MoneyIcon
    },
    {
        title: 'Send thank-you messages',
        description: 'Thank your followers and send a photo',
        icon: HeartIcon
    },
    {
        title: 'Livestream gift notifications',
        description: 'Get notified in real-time',
        icon: MicrophoneIcon
    },
    {
        title: 'Two way anonymity',
        description: 'Your privacy is our privacy',
        icon: PeopleLockIcon
    }
];
