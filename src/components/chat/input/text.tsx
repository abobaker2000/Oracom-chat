interface TextInputProps {
  value: string;
  onChange?: (value: string) => void;
}

export const TextInput = ({ value, onChange }: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder="Type your message..."
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};
