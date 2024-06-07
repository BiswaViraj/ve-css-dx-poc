import NovuInbox from "@/components/vanilla-extract/Wrapper";
import Body from "@/components/vanilla-extract/body";
import NovuHeader from "@/components/vanilla-extract/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold">Novu Inbox Styles:</h2>
      </div>

      <NovuInbox
        styles={{
          header: {
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "hotpink",
            color: "brown",
            marginTop: "4rem",
            padding: "2rem",
          },
          body: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "yellow",
            color: "black",
          },
        }}
        classNames={{
          header:
            "bg-blue-200 rounded-lg shadow-lg border-2 border-blue-300 p-4 m-4",
          body: "bg-red-200 p-4 m-4 rounded-lg shadow-lg border-2 border-red-300",
        }}
        classes="bg-gray-200 p-4 m-4 rounded-lg shadow-lg border-2 border-gray-300"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "1rem",
        }}
      />

      <div className="flex justify-center">
        <h2 className="text-2xl font-bold">Novu Components Styles:</h2>
      </div>
      <NovuHeader
        vars={{
          brandColor: "green",
          fontSize: "24px",
        }}
        classes="test-class p-4 m-4 rounded-lg shadow-lg border-2 border-red-700 text-blue-700"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      />
      <Body classes="rounded-lg border-3 bg-gray-200 text-green-600 text-center text-xl font-bold" />
    </div>
  );
}
