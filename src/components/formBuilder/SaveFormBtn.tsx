import React, { useTransition } from "react";
import { Button } from "../../shadcnui/ui/button";
import { HiSaveAs } from "react-icons/hi";
import { toast } from "../../shadcnui/ui/use-toast";
import { FaSpinner } from "react-icons/fa";
import UseDesigner from "../hooks/UserDesigner";

function SaveFormBtn({ id }: { id: number }) {
  const { elements } = UseDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      // await UpdateFormContent(id, jsonElements);
      toast({
        title: "Success",
        description: "Your form has been saved",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className="h-4 w-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}

export default SaveFormBtn;
