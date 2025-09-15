import { useSendMessage } from "@/hooks";
import { TextInput } from "./text";
import { IMessage } from "@/interface";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ChatInput = () => {
  const { loading, error, sendMessage } = useSendMessage();
  const formik = useFormik<IMessage>({
    initialValues: {
      content: "",
      role: "user",
    },
    validationSchema: Yup.object().shape({
      content: Yup.string()
        .required("Message is required")
        .min(1, "Message must be at least 1 character")
        .max(1000, "Message must be at most 1000 characters")
        .trim(),
    }),
    onSubmit: (values) => {
      sendMessage(values).then(() => {
        formik.resetForm();
      });
    },
  });

  return (
    <div className="w-full flex flex-col box-shadow">
      <form
        onSubmit={formik.handleSubmit}
        className={"px-1 py-3 flex items-center"}
      >
        <TextInput
          value={formik.values.content}
          onChange={(value) => formik.setFieldValue("content", value)}
        />
        <button
          disabled={loading}
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
      {error && <div className="text-red-500 text-sm px-2">{error}</div>}
    </div>
  );
};
