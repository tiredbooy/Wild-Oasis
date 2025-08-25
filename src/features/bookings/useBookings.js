import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBooking,
  });

  return { isLoading , bookings, error }
}

export default useBookings;
