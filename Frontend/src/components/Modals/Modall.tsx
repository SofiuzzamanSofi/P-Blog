/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  secondaryAction?: () => void;
  src?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  disabled,

  src,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
          relative
          w-10/12
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          h-auto
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex
                items-center
                p-6
                rounded-t
                justify-between
                relative

                "
              >
                <div className="flex gap-x-2">
                  {src && (
                    <Image src={src} alt="" className="h-12 w-12 rounded-full" />
                  )}
                  <div className="text-lg font-semibold">{title}</div>
                </div>
                <button
                  className="
                    p-2
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    top-5
                    right-5
                    bg-neutral-800/70
                    rounded-full
                  "
                  onClick={handleClose}
                  disabled={disabled}
                >
                  <IoMdClose size={22} className="text-white" />
                </button>
              </div>
              {/*body*/}
              <div className="relative pt-12 px-6 flex-auto">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2  px-6 pb-3">{footer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
