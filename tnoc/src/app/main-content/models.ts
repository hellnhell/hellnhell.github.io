export interface MenuItem {
  title: string;
  year: string;
  dimensions?: string;
  image?: string;
  video?: string;
}

export interface Menu {
  title: string;
  number: string;
  isActive: boolean;
  items: MenuItem[];
}

export const menus: Menu[] = [
  {
    title: 'PHOTOGRAPHY',
    number: '01',
    isActive: true,
    items: [
      {
        title: '#treeoflife',
        year: '2022',
        dimensions: 'Φ720',
        image: '/assets/imgs/bollers2.JPG',
      },
      {
        title: '#landscape',
        year: '2022',
        dimensions: 'Φ720',
        image: '/assets/imgs/bollers2.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        dimensions: 'Φ720',
        image: '/assets/imgs/bollers2.JPG',
      },
      {
        title: '#landscape',
        year: '2022',
        dimensions: 'Φ720',
        image: '/assets/imgs/bollers2.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        dimensions: 'Φ720',
        image: '/assets/imgs/bollers2.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        dimensions: 'Φ720',
        image: '/assets/imgs/bollers2.JPG',
      },
    ],
  },
  {
    title: 'VIDEO',
    number: '02',
    isActive: true,
    items: [
			{
				title: 'MYLAR SOCIALS',
				year: '2022',
				video: '/assets/imgs/MYLAR_Socials_5.mp4',
			},
			{
				title: 'WILD PONY FW',
				year: '2022',
				video: '/assets/imgs/FULL_1_BN.mp4',
			},
			{
				title: 'WILD PONY ECOMMERCE ',
				year: '2022',
				video: '/assets/imgs/WP_1.mp4',
			},
			{
				title: 'LE BAIN SOCIALS',
				year: '2022',
				video: '/assets/imgs/Test_bot_wb.mp4',
			},
    ],
  },
  {
    title: 'CODING PROJECTS',
    number: '03',
    isActive: true,
    items: [
		{
			title: '#treeoflife',
			year: '2022',
			dimensions: 'Φ720',
			image: '/assets/imgs/bollers2.JPG',
		  },
		  {
			title: '#landscape',
			year: '2022',
			dimensions: 'Φ720',
			image: '/assets/imgs/bollers2.JPG',
		  },
    ],
  },
	{
    title: 'CONTACT',
    number: '04',
    isActive: true,
    items: [
		{
			title: '#treeoflife',
			year: '2022',
			dimensions: 'Φ720',
			image: '/assets/imgs/bollers2.JPG',
		  },
		  {
			title: '#landscape',
			year: '2022',
			dimensions: 'Φ720',
			image: '/assets/imgs/bollers2.JPG',
		  },
    ],
  },
];
