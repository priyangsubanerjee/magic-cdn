const input = document.getElementById("input");

// input.addEventListener("change", async (e) => {
//   const file = e.target.files[0];
//   const formData = new FormData();
//   formData.append("data", file);
//   try {
//     const { data, status } = await axios.post("/", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     if (status === 200) {
//       const link = document.createElement("a");
//       link.href = "/v1/" + data.Key;
//       link.innerText = "Download";
//       document.body.appendChild(link);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
