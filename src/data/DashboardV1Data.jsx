import Img1 from '../assets/images/0.jpg';
import Img2 from '../assets/images/1.jpg';
import Img3 from '../assets/images/4.jpg';
import ImgHeader from '../assets/images/pro4.jpg';

const percentagePanel = [
    {
        id: "1",
        title: "Computer Technologies",
        price: "$5000",
        priceTitle: "Tuition Fees",
        progressColor: "#006DF0"
    }, {
        id: "2",
        title: "Accounting Technologies",
        price: "$3000",
        priceTitle: "Tuition Fees",
        progressColor: "#933EC5"
    }, {
        id: "3",
        title: "Electrical Engineering",
        price: "$2000",
        priceTitle: "Tuition Fees",
        progressColor: "#65b12d"
    }, {
        id: "4",
        title: "Chemical Engineering",
        price: "$3500",
        priceTitle: "Tuition Fees",
        progressColor: "#D80027"
    }
];

const dashboardChartData = [
    {
        month: "Jan",
        city: "Tokyo",
        temperature: 50
    }, {
        month: "Jan",
        city: "London",
        temperature: 80
    }, {
        month: "Jan",
        city: "BeiJin",
        temperature: 20
    }, {
        month: "Feb",
        city: "Tokyo",
        temperature: 130
    }, {
        month: "Feb",
        city: "London",
        temperature: 100
    }, {
        month: "Feb",
        city: "BeiJin",
        temperature: 80
    }, {
        month: "Mar",
        city: "Tokyo",
        temperature: 80
    }, {
        month: "Mar",
        city: "London",
        temperature: 60
    }, {
        month: "Mar",
        city: "BeiJin",
        temperature: 70
    }, {
        month: "Apr",
        city: "Tokyo",
        temperature: 70
    }, {
        month: "Apr",
        city: "London",
        temperature: 200
    }, {
        month: "Apr",
        city: "BeiJin",
        temperature: 140
    }, {
        month: "May",
        city: "Tokyo",
        temperature: 180
    }, {
        month: "May",
        city: "London",
        temperature: 150
    }, {
        month: "May",
        city: "BeiJin",
        temperature: 140
    }];

const towardsPanelData = [
    {
        id: '1',
        title: 'Total Visit',
        color: '#006DF0',
        val: '1500',
        undulation: 'shengji'
    }, {
        id: '2',
        title: 'Page Views',
        color: '#933EC5',
        val: '3000',
        undulation: 'shengji'
    }, {
        id: '3',
        title: 'Unique Visitor',
        color: '#65b12d',
        val: '5000',
        undulation: 'shengji'
    }, {
        id: '4',
        title: 'Bounce Rate',
        color: '#D80027',
        val: '18%',
        undulation: 'jiangji'
    }
];

const towardsPanelChartData = [
    {
        year: "1951 年",
        sales: 38
    }, {
        year: "1952 年",
        sales: 52
    }, {
        year: "1956 年",
        sales: 61
    }, {
        year: "1957 年",
        sales: 90
    }, {
        year: "1958 年",
        sales: 48
    }, {
        year: "1959 年",
        sales: 38
    }];

const socialPanelData = [
    {
        img: "facebook",
        num: "50k Likes",
        growing: "You main list growing",
    }, {
        img: "twitter",
        num: "30k Followers",
        growing: "You main list growing",
    }, {
        img: "instagram",
        num: "7k Connections",
        growing: "You main list growing",
    }, {
        img: "youtube",
        num: "50k Subscribers",
        growing: "You main list growing",
    }
];

const teacherPanelData = [
    {
        bgImg: Img1,
        teacherImg: ImgHeader,
        teacherName: "Sarah Graves",
        data: [
            {
                val: 199,
                type: "Articles"
            }, {
                val: 599,
                type: "Like"
            }, {
                val: 399,
                type: "Comment"
            }
        ]
    }, {
        bgImg: Img2,
        teacherImg: ImgHeader,
        teacherName: "Garbease sha",
        data: [
            {
                val: 199,
                type: "Articles"
            }, {
                val: 599,
                type: "Like"
            }, {
                val: 399,
                type: "Comment"
            }
        ]
    }, {
        bgImg: Img3,
        teacherImg: ImgHeader,
        teacherName: "Gobetro pro",
        data: [
            {
                val: 199,
                type: "Articles"
            }, {
                val: 599,
                type: "Like"
            }, {
                val: 399,
                type: "Comment"
            }
        ]
    }
];

export {
    percentagePanel,
    dashboardChartData,
    towardsPanelData,
    towardsPanelChartData,
    socialPanelData,
    teacherPanelData
}