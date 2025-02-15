import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class BusinessAssetGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AdaccountTasks(): Record<string, any>;
    static get OfflineConversionDataSetTasks(): Record<string, any>;
    static get PageTasks(): Record<string, any>;
    static get PixelTasks(): Record<string, any>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAssignedUser(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedAdAccounts(params?: Record<string, any>): Promise<any>;
    getContainedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedAdAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedApplications(params?: Record<string, any>): Promise<any>;
    getContainedApplications(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedApplication(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedCustomConversions(params?: Record<string, any>): Promise<any>;
    getContainedCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedCustomConversion(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedInstagramAccounts(params?: Record<string, any>): Promise<any>;
    getContainedInstagramAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedInstagramAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedOfflineConversionDataSets(params?: Record<string, any>): Promise<any>;
    getContainedOfflineConversionDataSets(
        fields: string[],
        params?: Record<string, any>,
        fetchFirstPage?: boolean,
    ): Cursor;
    createContainedOfflineConversionDataSet(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedPages(params?: Record<string, any>): Promise<any>;
    getContainedPages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedPage(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedPixels(params?: Record<string, any>): Promise<any>;
    getContainedPixels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedPixel(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    deleteContainedProductCatalogs(params?: Record<string, any>): Promise<any>;
    getContainedProductCatalogs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createContainedProductCatalog(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<BusinessAssetGroup>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessAssetGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<BusinessAssetGroup>;
}
