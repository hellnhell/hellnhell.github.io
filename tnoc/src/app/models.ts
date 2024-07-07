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
        image: '/assets/imgs/bodegon.JPEG',
      },
      {
        title: '#landscape',
        year: '2022',
        image: '/assets/imgs/chair_bench.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/chair_wild.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/cruz.png',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/cubic_buildin.png',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/f4.png',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/fallen_angel.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/flower_bench.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/flower_hand.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/flower_sunset.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/train.png',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/train2.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove3.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove6.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove7.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove11.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove12.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove13.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove14.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove16.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove17.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove18.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove19.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove20.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove22.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove23.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove25.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove26.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove27.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove28.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove29.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/glove31.JPEG',
      },
      {
        title: '#landscape',
        year: '2022',
        image: '/assets/imgs/green_bench.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/hercules.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/hanged.png',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/kieffer2.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/fruit1.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/fruit2.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/fruit1.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/justice1.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/justice2.jpg',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/london1.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/london2.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/london3.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/lucus.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/man_dus1.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/man_dus2.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/man_dus3.JPG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/purple1.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/purple2.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/purple3.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/man_sky.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/man_window.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/paris_chair.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/red_car.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/rodin_my.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/rodin_walker.png',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/sea_colors.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/shirt_you.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/sky1.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/sky3.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/snow_bench.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/snow_coat.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/street1.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/street2.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/trains.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/wedding.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/window2.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/window3.JPEG',
      },
      {
        title: '#treeoflife',
        year: '2022',
        image: '/assets/imgs/yellow_flower.JPEG',
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
