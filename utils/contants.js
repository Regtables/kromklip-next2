import { AiFillHome } from 'react-icons/ai'
import { FaCaravan , FaHiking } from 'react-icons/fa'
import { GiPartyPopper, GiRotaryPhone, GiMountainRoad } from 'react-icons/gi'
import { MdFamilyRestroom } from 'react-icons/md'


export const LINKS = [
  {
    link: 'home',
    slug: '/',
    icon: <AiFillHome />
  },
  {
    link: 'accomodation',
    slug: '/accomodation',
    icon: <FaCaravan />
  },
  {
    link: 'functions',
    slug: '/functions',
    icon: <GiPartyPopper />
  },
  {
    link: 'things to do',
    slug: '/facilities',
    icon: <FaHiking />
  },
  {
    link: 'visitors gallery',
    slug: '/gallery',
    icon: <MdFamilyRestroom />
  },
  {
    link: 'nearby activities',
    slug: 'activities',
    icon: <GiMountainRoad />
  },
  {
    link: 'contact us',
    slug: 'contact',
    icon: <GiRotaryPhone />
  },
]