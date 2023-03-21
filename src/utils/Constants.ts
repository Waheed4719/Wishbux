import { CardPropType } from '../types';
import InfinityIcon from '../assets/images/infinity.svg';
import ChargeBackIcon from '../assets/images/chargeback.svg';
import CogsIcon from '../assets/images/cogs.svg';
import PeopleIcon from '../assets/images/people.svg';
import IdeaIcon from '../assets/images/idea.svg';
import HiddenIcon from '../assets/images/hidden.svg';
import HeartPlusIcon from '../assets/images/heart-plus.svg';
import DollarIcon from '../assets/images/dollar.svg';
import HeartIcon from '../assets/images/heart.svg';
import MoneyIcon from '../assets/images/money.svg';
import MicrophoneIcon from '../assets/images/microphone.svg';
import PeopleLockIcon from '../assets/images/people-lock.svg';
import CheckIcon from '../assets/images/check.svg';

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

export const earlyAccess: CardPropType[] = [
    {
        title: 'Reserve your user name',
        description: 'No fees or hidden charges',
        icon: CheckIcon
    },
    {
        title: 'Enroll into our early access program',
        description:
            'That means you’ll always get access to our latest features before anyone else, including our mobile app launching later this year!',
        icon: CheckIcon
    },
    {
        title: '$100 guarantee within the first 30 days',
        description:
            'We guarantee you’ll make at least $100 from your wishlist in the first 30 days or we’ll give you $100.  Guaranteed',
        icon: CheckIcon
    }
];

export const headerItems = [
    {
        id: 1,
        title: 'How It Works',
        href: '#howitworks'
    },
    {
        id: 2,
        title: 'Benefits',
        href: '#benefits'
    },
    {
        id: 3,
        title: 'Features',
        href: '#features'
    },
    {
        id: 4,
        title: 'Reviews',
        href: '#reviews'
    }
];
