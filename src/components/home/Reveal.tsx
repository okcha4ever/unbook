import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { type Subject } from "@prisma/client";
import parser from "html-react-parser";

const Reveal = ({ subject }: { subject?: Subject | null }) => {
  return (
    <>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{subject?.title}</AlertDialogTitle>
          <AlertDialogDescription className="w-fit font-semibold">
            <p className="max-w-[450px] break-words">
              {subject?.description && subject && parser(subject?.description)}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  );
};

export default Reveal;
