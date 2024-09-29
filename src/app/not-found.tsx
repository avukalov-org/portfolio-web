import PageTransitionWrapper from "@/components/page-transition-wrapper";

export default function NotFound() {
  return (
    <PageTransitionWrapper>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium">404 - Page Not Found</h1>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}
