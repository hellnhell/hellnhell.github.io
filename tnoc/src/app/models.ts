export interface MenuItem {
  title: string;
  year?: string;
  image?: string;
  video?: string;
  videoCategory?: string;
}

export interface Menu {
  title: string;
  number: string;
  isActive: boolean;
  items: MenuItem[];
}

export const menus: Menu[] = [
  {
    title: 'CODING PROJECTS',
    number: '03',
    isActive: true,
    items: [
		{
			title: '#treeoflife',
			year: '2022',
			image: '/assets/imgs/bollers2.JPG',
		  },
		  {
			title: '#landscape',
			year: '2022',
			image: '/assets/imgs/bollers2.JPG',
		  },
    ],
  },
	{
    title: 'CONTACT',
    number: '04',
    isActive: true,
    items: [],
  },
];
