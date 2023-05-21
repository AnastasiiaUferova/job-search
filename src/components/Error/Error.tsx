import { Alert } from "@mantine/core";
import "../../styles/Error/Error.css";
import { useState } from "react";

export default function Error() {
  const [className, setClassName] = useState<string>(() => "error");

  const onClose = () => {
    setClassName("error error_closed");
  };

  return (
    <div className={className}>
      <Alert
        onClose={onClose}
        withCloseButton
        title="Error!"
        color="red"
        variant="outline"
      >
        Произошла ошибка. Попробуйте перезагрузить страницу.
      </Alert>
    </div>
  );
}
