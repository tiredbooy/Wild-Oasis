import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],   // include bookingId in key
    queryFn: () => getBooking(bookingId), // ✅ pass function, not direct call
    enabled: !!bookingId, // only run if bookingId exists
  });

  return { isLoading, booking, error };
}

export default useBooking;
