export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#182A42] px-4">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#D8BE96]/30 border-t-[#D8BE96]" />
        <p className="mt-4 text-sm font-semibold tracking-wide text-[#D8BE96]">
          Loading...
        </p>
      </div>
    </div>
  );
}
