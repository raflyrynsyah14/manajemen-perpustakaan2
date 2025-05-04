const uploadToImageKit = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", "user-id");
  formData.append("publicKey", process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!);
  ...
  const res = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Basic ${btoa(`${process.env.IMAGEKIT_PRIVATE_KEY}:`)}`,
    },
  });
