// import React,{useState} from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Axios from 'axios';

// const TAX_RATE = 0.07;

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// // function createRow(desc, qty, unit) {
// //   const price = priceRow(qty, unit);
// //   return { desc, qty, unit, price };
// // }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }


// const invoiceSubtotal = subtotal();
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;



// export default function Cart() {


//     const [productState,setProductState]=useState([]);

//     const getProduct=(id)=>{
//         Axios.get('http://localhost:1000/product/${id}')
//         .then((res)=>{
//             console.log("Product list:",res);
//             setProductState(res.data);
//         })
//         .catch(err=>{
//             console.log("Error",err);
//         })
    

//   return (
//     <div className="container-fluid mt-4 mb-4 ml-4 mr-4">
//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="spanning table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="center" colSpan={3}>
//              <b>Details</b>
//             </TableCell>
//             <TableCell align="right"><b>Price</b></TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Food Name</TableCell>
//             <TableCell align="right">Qty.</TableCell>
//             <TableCell align="right">Price</TableCell>
//             <TableCell align="right">Sum</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {setProductState.map((item) => (
//             <TableRow key={item.id}>
//               <TableCell>{item.pname}</TableCell>
//               {/* <TableCell align="right">{item.qty}</TableCell> */}
//               {/* <TableCell align="right">{item.}</TableCell> */}
//               <TableCell align="right">{ccyFormat(item.price)}</TableCell>
//             </TableRow>
//           ))}

//           <TableRow>
//             <TableCell rowSpan={3} />
//             <TableCell colSpan={2}>Subtotal</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Tax</TableCell>
//             <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell colSpan={2}>Total</TableCell>
//             <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }
// }