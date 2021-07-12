import { apiGet, apiPost } from 'services';

const url = 'http://52.221.227.27/api';

const endpoint = {
    login: `${url}/login`,
    register: `${url}/register`,
    forgot_password: `${url}/forgot-password`,
    new_password: `${url}/new-password`,
    incoming_order: `${url}/merchant/incoming-order`,
    progress_order: `${url}/merchant/inprogress-order`,
    accept_order: `${url}/merchant/accept-order/`,
    create_packet: `${url}/merchant/create-packet`,
    create_packet_menu: `${url}/merchant/create-packet-menu`,
    profile: `${url}/merchant/profile`,
    restaurant_profile: `${url}/merchant/profile-restaurant`,
    update_profile: `${url}/merchant/update-profile`,
    packets: `${url}/merchant/packets`,
    packet_menu: `${url}/merchant/packet-menu/`,
};

export const login = (body) => {
    return apiPost(endpoint.login, body);
}

export const register = (body) => {
    return apiPost(endpoint.register, body);
}

export const forgot_password = (body) => {
    return apiPost(endpoint.forgot_password, body);
}

export const new_password = (body) => {
    return apiPost(endpoint.new_password, body);
}

export const getIncomingOrder = () => {
    return apiGet(endpoint.incoming_order);
} 

export const getProgressOrder = () => {
    return apiGet(endpoint.progress_order);
}

export const getAcceptOrder = (orderId) => {
    return apiGet(endpoint.accept_order + orderId);
}

export const createPacket = (body) => {
    return apiPost(endpoint.create_packet, body);
}

export const createPacketMenu = (body) => {
    return apiPost(endpoint.create_packet_menu, body);
}

export const getPackets = () => {
    return apiGet(endpoint.packets);
}

export const getPacketsMenu = (id) => {
    return apiGet(endpoint.packet_menu + id);
}