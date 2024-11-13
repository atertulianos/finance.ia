import { cn } from "@/_lib/utils";
import { FingerprintIcon } from "lucide-react";
import React from "react";

type LogoTipoProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  Icon?: React.FC<{ size: number; className?: string }>;
  Label?: React.FC<{ className?: string; children?: React.ReactNode }>;
};

type LogoTipoRootType = React.FC<LogoTipoProps> & {
  Icon: React.FC<{ size: number; className?: string }>;
  Label: React.FC<{ className?: string; label?: string }>;
};

const Logo: LogoTipoRootType = ({ className, children, ...rest }) => {
  return (
    <div className={cn("flex flex-row flex-nowrap", className)} {...rest}>
      {children}
    </div>
  );
};

const LogoIcon: React.FC<{ size: number; className?: string }> = ({
  size,
  className,
}) => {
  return <FingerprintIcon className={className} size={size} />; // Substitua "Icon" pelo seu componente de ícone real
};

const LogoLabel: React.FC<{
  className?: string;
  label?: string;
}> = ({ className, label }) => {
  return <div className={className}>{label}</div>;
};

// Adicionando as propriedades de composição
Logo.Icon = LogoIcon;
Logo.Label = LogoLabel;

export default Logo;
