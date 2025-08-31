import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";


export default function useDeleteBooking() {
    const queryClient = useQueryClient();

    const { mutate : deleteBooking, isLoading : isDeleting } = useMutation({
        mutationFn : (bookingId) => 
            deleteBookingApi(bookingId),
        onSuccess : (data) => {
            toast.success(`Booking #${data?.id} successfully Deleted.`);
            queryClient.invalidateQueries({
                active : true
            })
        },
        onError : () => toast.error("There was an error while deleting booking")
    })

    return { isDeleting , deleteBooking  } ;
}