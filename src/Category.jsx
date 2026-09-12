import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";




export const categories=[{
  id:1,
  name:"All",
  category:"All",
  image:<TiThSmallOutline />
},

{
  id:2,
  name:"BreakFast",
  category:"breakfast",
  image:<MdOutlineFreeBreakfast />
 
},

{
  id:3,
  name:"Soups",
  category:"soups",
  image:<TbSoup />
},

{
  id:4,
  name:"Pasta",
  category:"pasta",
  image:<CiBowlNoodles />

},

{
  id:5,
  name:"Main Course",
  category:"main_course",
  image:<MdOutlineFoodBank />

},

{
  id:6,
  name:"Pizza",
  category:"pizza",
  image:<GiFullPizza />

},

{
  id:7,
  name:"Burger",
  category:"burger",
  image:<GiHamburger />

},


]