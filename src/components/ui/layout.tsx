export const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container mx-auto w-[90%] sm:w-[500px] md:w-[600px] lg:w-[800px] ${className}`}
    >
      {children}
    </div>
  );
};

const colors = {
  primary: "bg-primary text-black",
  secondary: "bg-secondary text-white",
};

export const Button = ({
  children,
  className = "",
  onClick,
  color = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
}) => {
  return (
    <button
      className={`${colors[color]} hover:bg-opacity-70 hover:scale-95 transition-transform font-bold py-2.5 px-4 text-sm rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const H1 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-5xl font-bold text-white text-balance ${className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`text-3xl font-bold text-white text-balance ${className}`}>
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={`text-2xl font-bold text-white text-balance ${className}`}>
      {children}
    </h3>
  );
}

export const Text = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-white ${className}`}>{children}</p>;
};

export const Input = ({
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-secondary px-4 py-2.5 rounded-lg outline-none text-white ${className}`}
    />
  );
};
