export enum LoginInputFieldsNames{
    EMAIL = "email",
    PASSWORD="gender",
}

export enum Roles{
    ADMIN = "admin",
    USER="user",
}

export enum LoginInputFieldsErrors{
    EMAIL_INVALID_ERROR = "Enter a valid Email",
    EMAIL_REQUIRED_ERROR = "Email is required",
    PASSWORD_MIN_ERROR = "Password must be at least 4 characters",
    PASSWORD_REQUIRED_ERROR = "Password is required",
}

export enum LoginInputFieldsPlaceholders{
    EMAIL = "Email",
    PASSWORD="Password",
}

export enum CraftInputFieldsNames{
    NAME = "name",
    MATERIAL="material",
    PRICE="price",
    DESCRIPTION="description",
    PHOTO="photo",
}

export enum CraftInputFieldsErrors{
    NAME_MIN_ERROR = "Name must be at least 3 characters",
    NAME_REQUIRED_ERROR = "Name is required",
    DESCRIPTION_MIN_ERROR = "Description must be at least 10 characters",
    DESCRIPTION_REQUIRED_ERROR = "Description is required",
    PRICE_REQUIRED_ERROR = "Price is required",
    MATERIAL_REQUIRED_ERROR = "Material is required",
}

export enum CraftInputFieldsPlaceholders{
    NAME = "Name",
    MATERIAL="Material",
    PRICE="Price",
    DESCRIPTION="Description",
    PHOTO="Photo",
}

export enum CraftApiErrors{
    FETCHING_CRAFT_UNSUCCESSFUL = "Fetching crafts unsuccessful!",
    REMOVING_CRAFT_UNSUCCESSFUL = "Removing crafts unsuccessful!",
    ADDING_CRAFT_UNSUCCESSFUL = "Adding crafts unsuccessful!",
    UPDATING_CRAFT_UNSUCCESSFUL = "Updating crafts unsuccessful!",
}

export enum SalesApiErrors{
    FETCHING_ALL_SALES_UNSUCCESSFUL = "Fetching sales unsuccessful!",
    FETCHING_USER_SALES_UNSUCCESSFUL = "Fetching orders unsuccessful!",
    BUYING_CRAFT_UNSUCCESSFUL = "Buying crafts unsuccessful!",
}

export enum UserApiErrors{
    AUTHENTICATING_USER_UNSUCCESSFUL = "Login unsuccessful!",
}