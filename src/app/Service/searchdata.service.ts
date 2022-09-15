import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)
export class SearchService{
    list:any;
    constructor(){

    }
    getData(){
        return this.list = [
            {
                thumb: 'https://cdn.pixabay.com/photo/2020/04/28/23/46/different-nationalities-5106668__340.jpg',
                title: 'Async Await in Javascript Promises | Async Await in Hindi | Rxjs Tutorial Hindi (2021) [Ep - #3]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },
            {
                thumb: 'https://cdn2.vectorstock.com/i/1000x1000/73/51/set-of-different-butterflies-in-flight-vector-10187351.jpg',
                title: 'RXJS Series (In Hindi) ComingSoon... In Uxtrendz Style',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },
            {
                thumb: 'https://researchmatters.in/sites/default/files/styles/large_800w_scale/public/25junecoronaiitb.jpg?itok=m6Phj0EM',
                title: 'Thanks for making this series. Your Angular series is completely awesome.',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },
            {
                thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0l1bhK_hY33oj6AHmekkEPpWVPvHdKftYw&usqp=CAU',
                title: 'FromEvent Rxjs Operator | Create Stream with FromEvent (Short Ver) | Rxjs Series (2021) [Ep - #4]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },       
            {
                thumb: 'https://static.toiimg.com/thumb/msid-94071423,imgsize-663356,width-300,height-225,resizemode-75/94071423.jpg',
                title: 'Angular2',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },      
            {
                thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFzGDtGu40WVUx07O9onq5-9hHnWH3UcLKg&usqp=CAU',
                title: 'Angular12',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://s.studiobinder.com/wp-content/uploads/2019/11/Different-Types-of-Cameras-Featured-StudioBinder-min.jpg',
                title: 'Angular13',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/06/13183550/Countries-and-Parliaments.png',
                title: 'FromEvent Rxjs Operator | Create Stream with FromEvent (Short Ver) | Rxjs Series (2021) [Ep - #4]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/02/COLOR-MEANINGS.jpg?auto=format&q=60&fit=max&w=930',
                title: 'Filter in Rxjs | Rxjs Filter Angular | Rxjs Tutorial in Hindi (2020) [Ep - #11]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48Cd3GIA0d5RUGZLwzrPl203YVYp460N6Kg&usqp=CAU',
                title: 'Custom Observable in Rxjs | Create Observable | Rxjs Tutorial in Hindi (2020) [Ep - #8]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://cdn.pixabay.com/photo/2017/08/11/22/48/different-nationalities-2633028__340.png',
                title: 'tutorials and videos.',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://cdn.faruzo.com/wp-content/uploads/20210322174615/ear-piercings-chart-different-name-of-piercings.jpg',
                title: 'RXJS Series (In Hindi) ComingSoon... In Uxtrendz Style',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },       
            {
                thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsEvE-2fX9-rxr4ndhgxZ4NtkBl1Th3ibLw&usqp=CAU',
                title: 'FromEvent Rxjs Operator | Create Stream with FromEvent (Short Ver) | Rxjs Series (2021) [Ep - #4]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHKxMH1WZsSmZOAIy7CyXdTPY6i764grj5A&usqp=CAU',
                title: 'tutorials and educational videos.',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjWI6eBOc-ufyPoqtQ0jRUvuLeyw-aJBIFw&usqp=CAU',
                title: 'SwitchMap in Rxjs(Sneak Peek) - Behind the scene (2021) [Ep #1]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/l-intro-1659544996.jpg',
                title: 'ToArray Operator in Rxjs | Rxjs Observables | Rxjs Tutorial in Hindi (2020) [Ep - #7]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0X6454YVvqtHRSeR4RPgmyV8xMKW2fXybHw&usqp=CAU',
                title: 'SwitchMap in Rxjs(Sneak Peek) - Behind the scene (2021) [Ep #1]',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            },        
            {
                thumb: 'https://i0.wp.com/edifyclue.in/wp-content/uploads/2020/11/Different-types-of-Keyboards.jpg',
                title: 'tutorials and educational videos.',
                description: 'In This Video You will Learn about How to Create Stream with FromEvent( ) Operator. Follow thi'
            }
        ];
    }

}