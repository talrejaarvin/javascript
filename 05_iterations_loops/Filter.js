// const coding = ["java", "cpp", "dart", "python", "ruby"];

// const values = coding.forEach( item => {
//     // console.log(item );
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((nums) => nums > 5)
const newNums = myNums.filter(nums => {
    return nums > 5;
})
//console.log(newNums);

const books = [
    {
        title: "Book one", genre: "Fiction", publish: 1981, edition: 2004
    },
    {
        title: "Book two", genre: "Non-Fiction", publish: 1989, edition: 2014
    },
    {
        title: "Book three", genre: "Comedy", publish: 2000, edition: 2024
    },
    {
        title: "Book Four", genre: "Science", publish: 1881, edition: 2009
    },
    {
        title: "Book Five", genre: "Documentery", publish: 1990, edition: 2000
    },
    {
        title: "Book six", genre: "Fiction", publish: 1984, edition: 2010
    },
    {
        title: "Book seven", genre: "Non-Fiction", publish: 1981, edition: 2003
    },
    {
        title: "Book eight", genre: "Comedy", publish: 1980, edition: 2004
    },
    {
        title: "Book nine", genre: "Documentery", publish: 1981, edition: 2023
    },
    {
        title: "Book ten", genre: "History", publish: 2005, edition: 2015
    }
]

const userBooks =  books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == "Fiction";

    
} );

console.log(userBooks); 
