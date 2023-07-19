# Getting Started 

I am using yarn as a package manager in this repo so please make sure you run 

### `yarn`

to install all the necessary dependencies. 

Run 
### `yarn start` 

to spin up the app.  

## Comments

### On material ui :
I understand the benefits of usign material ui as a component library, but in the interest of
accessibility, in the case of the Book component for example, it wraps the content of the Book in two divs which adds meaningless noise to the DOM. 
I would've much preferred writing the Book component as an <article> tag instead which allows me to query the DOM with getByRole in the book.test.tsx file rather than getByText. 

Same comments for other imported components such as the Alert component that wraps the error message in multiple divs

### On repo choices:

In the interest of time, I chose to make the Book component the class based component. 
Even though I could've written the BookList or BooksResults as class ones to showcase understanding of the lifecycle methods syntax (e.g componentDidMount() etc...), I chose to showcase understanding of hooks over that as they are the way forward !

In the intererst of time again, I've written tests only for Book, BookList, BookResults and the reducer.
I know this isn't clashing with the requirements of the tech test as you are asking to "Write one unit test for a component and one test for the Redux reducer", but in my normal day to day development flow I would write tests for every components. 

So given more time I would've written tests for :
 • the NavButtons to make sure the logics behing handlePageChange are being implemented correctly and the components render correctly depending on that 
 • the handlePageChange itself, to make sure the implementation itself covers all edge cases
 • the SearchField component to make sure it renders the correct updated ui according to the input values.

Since no Designs were provided and material ui was suggested to be used, I didn't focus on showcasing any css skills. If provided example designs I would've made use of the appropriate css
layouts. I usually write my css files as css modules that I import in the component file ! 

Overall really interesting tech test and look forward to discussing it further with you :)
