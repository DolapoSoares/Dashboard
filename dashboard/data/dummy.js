import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { RiWalletLine} from 'react-icons/ri'
import { TbArrowsDownUp} from 'react-icons/tb'
import { BsBarChart} from 'react-icons/bs'
import { BsMegaphone} from 'react-icons/bs'
import { TbExchange} from 'react-icons/tb'
import { FiShoppingCart} from 'react-icons/fi'
import { FiLink} from 'react-icons/fi'
import { TbArrowsRightLeft } from 'react-icons/tb'

export const links = [
    {
      title: "Main Pages",
      links: [
        {
          name: "dasboard",
          icon: <MdOutlineSpaceDashboard/>,
        },
        {
          name: "balances",
          icon: <RiWalletLine />,
        },
        {
          name: "transactions",
          icon: <TbArrowsDownUp />,
        },
        {
          name: "analytics",
          icon: <BsBarChart />,
        },
        {
          name: "marketing",
          icon: <BsMegaphone />,
        },
        {
          name: "exchange rates",
          icon: <TbExchange />,
        }
      ],
    },
    {
      title: "Accept payments",
      links: [
        {
          name: "checkout",
          icon: <FiShoppingCart />,
        },
        {
          name: "payment links",
          icon: <TbArrowsRightLeft />,
        }
      ],
    },
    {
        title: "Send payments",
        links: [
          {
            name: "wire",
            icon: <FiShoppingCart />,
          }
        ]
      }
  ];
  