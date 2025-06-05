// import { getProjects } from "../repository/project.repo";

// //==============={ Get Customers From DB }===============//

// // export const getAllProjects_x = async () => {
// //   try {
// //     // const projects = await getProjects();
// //     const { data, lastVisible } = await getProjects({ pageSize: 2 });
// //     console.log({lastVisible})
// //     return { props: { projects: data, lastVisible } }; // Important for SSR to return the data
// //   } catch (error) {
// //     console.error("Error fetching customers:", error);
// //     return {
// //       props: {
// //         projects: [],
// //         lastVisible: {},
// //         error: "Failed to load customers",
// //       },
// //     };
// //   }
// // };


// export const getAllProjects = async (lastVisibleId?: string) => {
//   try {
//     const { data, lastVisibleId: newLastVisibleId, hasMore } = await getProjects({ 
//       pageSize: 2,
//       lastVisibleId 
//     });
    
//     return { 
//       props: { 
//         projects: data,
//         lastVisibleId: newLastVisibleId,
//         hasMore
//       }
//     };
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     return {
//       props: {
//         projects: [],
//         lastVisibleId: null,
//         hasMore: false,
//         error: "Failed to load projects"
//       }
//     };
//   }
// };

// // //==============={ Add New Customer }===============//
// // export const addNewCustomerController = (dispatch, data) => {
// //     addNewCustomer(data)
// //         .then(res => {
// //             data.id = res.id
// //             dispatch(addCustomer(data))
// //         })
// //         .catch(error => {
// //             console.log(error)
// //         })

// // }

// // //==============={ Update Customer }===============//
// // export const updateCustomerController = (dispatch, data) => {

// //     updateCustomer(data.id, { [CustomerModelKey.name]: data.name, [CustomerModelKey.email]: data.email, [CustomerModelKey.phoneNumber]: data.phoneNumber, [CustomerModelKey.address]: data.address, [CustomerModelKey.identity]: data.identity })
// //         .then(res => {
// //             dispatch(upgradeCustomer(data))
// //         })
// //         .catch(error => {
// //             console.log(error)
// //         })
// // }

// // //==============={ Delete Customer }===============//
// // export const deleteCustomerController = (dispatch, id) => {
// //     deleteCustomer(id)
// //         .then(res => {
// //             dispatch(removeCustomer(id))
// //         })
// //         .catch(error => {
// //             console.log(error)
// //         })
// // }
