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
    title: 'PHOTOGRAPHY',
    number: '01',
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
<<<<<<< HEAD
        image: '/assets/imgs/glove_2.jpg',
=======
        image: '/assets/imgs/bollers2.JPG',
>>>>>>> c7b25aa45666e519c7c18f241b47ca5bd04c2361
      },
      {
        title: '#treeoflife',
        year: '2022',

<<<<<<< HEAD
        image: '/assets/imgs/rodin_walker.png',
=======
        image: '/assets/imgs/bollers2.JPG',
>>>>>>> c7b25aa45666e519c7c18f241b47ca5bd04c2361
      },
      {
        title: '#landscape',
        year: '2022',

<<<<<<< HEAD
        image: '/assets/imgs/cruz.png',
=======
        image: '/assets/imgs/bollers2.JPG',
>>>>>>> c7b25aa45666e519c7c18f241b47ca5bd04c2361
      },
      {
        title: '#treeoflife',
        year: '2022',

<<<<<<< HEAD
        image: '/assets/imgs/cubic_buildin.png',
=======
        image: '/assets/imgs/bollers2.JPG',
>>>>>>> c7b25aa45666e519c7c18f241b47ca5bd04c2361
      },
      {
        title: '#treeoflife',
        year: '2022',

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
				video: '/assets/vids/MYLAR_Socials_5.mp4',
        videoCategory: 'MYLAR'
			},
      {
				title: 'MYLAR SOCIALS',
				video: '/assets/vids/MYLAR_Socials_3.mp4',
        videoCategory: 'MYLAR'
			},
      {
				title: 'MYLAR SOCIALS',
				video: '/assets/vids/MYLAR_Socials_4.mp4',
        videoCategory: 'MYLAR'
			},
			{
				title: 'WILD PONY FW',
				year: '2022',
				video: '/assets/vids/FULL_1_BN.mp4',
        videoCategory: 'Wild Pony' 
			},
			{
				title: 'WILD PONY ECOMMERCE ',
				year: '2022',
				video: '/assets/vids/WP_1.mp4',
        videoCategory: 'Wild Pony'
			},
			{
				title: 'LE BAIN SOCIALS',
				year: '2022',
				video: '/assets/vids/Test_bot_wb.mp4',
        videoCategory: 'Le Bain'
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
];
