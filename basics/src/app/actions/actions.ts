"use server";

export default async function submitContactForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate delay

  const email = formData.get("email");
  const message = formData.get("message");

  console.log(email, message);

  return "Error: please Re-Fill the form again..";
}
