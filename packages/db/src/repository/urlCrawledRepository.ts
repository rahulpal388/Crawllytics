import { Types } from "mongoose";
import { urlCrawledModel } from "../model/urlCrawledModel.js";
import { UrlCrawledType } from "../types/urlCrawledTypes.js";
import { RepositoryResponseType } from "../types/repositoryResponseType.js";

export const urlCrawledRepository = {
  addUrlCrawled,
  getUrlCrawledWithoutAnalyzedUrlData,
  getUrlCrawled,
  updateUrlCrawled,
};

// ###################### add  #######################

async function addUrlCrawled(urlInfo: UrlCrawledType) {
  try {
    const url = await urlCrawledModel.create(urlInfo);
    return {
      success: true,
      data: url,
    };
  } catch (err) {
    console.error("Error adding URL Crawled data:", err);
    return {
      success: false,
      data: null,
    };
  }
}

// ###################### get without analyzedUrlData #######################

async function getUrlCrawledWithoutAnalyzedUrlData(
  _id: Types.ObjectId | string,
): Promise<RepositoryResponseType<Omit<UrlCrawledType, "analyzedUrlData">>> {
  try {
    const urlCrawledData = await urlCrawledModel
      .findById(_id)
      .select("-_id -__v -analyzedUrlData")
      .lean();

    if (!urlCrawledData) {
      return {
        success: false,
      };
    }

    return {
      success: true,
      data: urlCrawledData,
    };
  } catch (err) {
    console.error("Error fetching URL Crawled data:", err);
    return {
      success: false,
    };
  }
}

// ######################## get #######################

async function getUrlCrawled(
  _id: Types.ObjectId | string,
): Promise<RepositoryResponseType<UrlCrawledType>> {
  try {
    const urlCrawledData = await urlCrawledModel.findById(_id).select("-_id -__v").lean();

    if (!urlCrawledData) {
      return {
        success: false,
      };
    }

    return {
      success: true,
      data: urlCrawledData,
    };
  } catch (err) {
    console.error("Error fetching URL Crawled data:", err);
    return {
      success: false,
    };
  }
}

// ###################### update  #######################

async function updateUrlCrawled() {}
