// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useFormContext } from "react-hook-form";

// const ImageSection = () => {
//   const { control, watch } = useFormContext();

//   const existingImageUrl = watch("imageUrl");

//   return (
//     <div className="space-y-2">
//       <div>
//         <h2 className="text-2xl font-bold">Image</h2>
//         <FormDescription>
// Thêm hình ảnh sẽ được hiển thị trên danh sách nhà hàng của bạn trong
// kết quả tìm kiếm. Việc thêm hình ảnh mới sẽ ghi đè lên hình ảnh hiện
// có.
//         </FormDescription>
//       </div>

//       <div className="flex flex-col gap-8 md:w-[50%]">
//         {existingImageUrl && (
//           <AspectRatio ratio={16 / 9}>
//             <img
//               src={existingImageUrl}
//               className="rounded-md object-cover h-full w-full"
//             />
//           </AspectRatio>
//         )}
//         <FormField
//           control={control}
//           name="imageFile"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input
//                   className="bg-white"
//                   type="file"
//                   accept=".jpg, .jpeg, .png"
//                   onChange={(event) =>
//                     field.onChange(
//                       event.target.files ? event.target.files[0] : null
//                     )
//                   }
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageSection;

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

const ImageSection = () => {
  const { control, watch } = useFormContext();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const existingImageUrl = watch("imageUrl");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>
          Thêm hình ảnh sẽ được hiển thị trên danh sách nhà hàng của bạn trong
          kết quả tìm kiếm. Việc thêm hình ảnh mới sẽ ghi đè lên hình ảnh hiện
          có.
        </FormDescription>
      </div>

      <div className="flex flex-col gap-8 md:w-[50%]">
        {previewUrl ? (
          <AspectRatio ratio={16 / 9}>
            <img
              src={previewUrl}
              alt="Selected Image Preview"
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        ) : existingImageUrl ? (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              alt="Existing Image"
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        ) : null}

        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) => {
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    );
                    handleImageChange(event);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;
